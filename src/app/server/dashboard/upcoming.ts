"use server";

import { Priority } from "@/app/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

export async function createUpcoming(formData: FormData) {

  const date = formData.get("date") as string; // "yyyy-MM-dd"
  const time = formData.get("time") as string; // "HH:mm"

  const scheduledAt = new Date(`${date}T${time}`)

  await prisma.activity.create({
    data: {
      act_name: formData.get("act_name") as string,
      subject: formData.get("subject") as string,
      priority: formData.get("priority") as Priority,
      dueAt: scheduledAt,
    },
  });
}

export async function getUpcoming() {
  const upcomingActivities = await prisma.activity.findMany({
    orderBy: {
      dueAt: "desc",
    }
  })
  return upcomingActivities;
}

export async function deleteUpcoming(activityId: string) {
  await prisma.activity.delete({
    where: {
      id: activityId,
    },
  });
}
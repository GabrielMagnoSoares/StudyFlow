"use client";

import { createUpcoming, deleteUpcoming, getUpcoming } from "@/app/server/dashboard/upcoming";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarUI } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Calendar,
  ChevronDownIcon,
  Clock,
  Pencil,
  Trash
} from "lucide-react";
import React from "react";
import useSWR from "swr";

export function UpcomingActivities() {
  // const priorityColors = {
  //   HIGH: "bg-destructive/10 text-destructive border-destructive/20",
  //   MEDIUM: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  //   LOW: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  // };
  const priorityColors = {
    HIGH: {
      label: "Alta",
      className: "bg-destructive/10 text-destructive border-destructive/20",
    },
    MEDIUM: {
      label: "Média",
      className: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    },
    LOW: {
      label: "Baixa",
      className: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    },
  };

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [valor, setValor] = React.useState("");
  const [time, setTime] = React.useState<string>(""); // "HH:mm"
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const { data: upcomingActivities, mutate } = useSWR(
    "upcomingActivities",
    getUpcoming
  );

  const handleCreateUpcoming = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    try {
      await createUpcoming(formData);
      await mutate();

      form.reset();
      setDate(undefined);
      setTime("");
      setValor("");
      setOpen(false);
      setSuccessMessage("Atividade criada com sucesso!");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUpcoming = async (id: string) => {
    const confirmed = confirm("Tem certeza que deseja deletar esta atividade?");
    if (!confirmed) return;

    try {
      await deleteUpcoming(id);
      await mutate();
    } catch (err) {
      console.error("erro ao deletar atividade:", err);
    }
  }

  const dateStr = date ? format(date, "yyyy-MM-dd") : "";

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            Próximas Atividades
          </CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Pencil />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={handleCreateUpcoming}>
                <DialogHeader className="mb-4">
                  <DialogTitle>Adicionar nova atividade</DialogTitle>
                  <DialogDescription>
                    Adicione suas atividades
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 grid-cols-2">
                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="activity">Nome da Atividade</Label>
                    <Input
                      name="act_name"
                      type="text"
                      placeholder="Insira o nome da atividade"
                    />
                  </div>
                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="subject">Matéria</Label>
                    <Input
                      name="subject"
                      type="text"
                      placeholder="Insira a matéria"
                    />
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col gap-3">
                        <Label htmlFor="date-picker" className="px-1">
                          Date
                        </Label>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date-picker"
                              className="w-32 justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <CalendarUI
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                                setOpen(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        <input type="hidden" name="date" value={dateStr} />
                      </div>
                      <div className="flex flex-col gap-3">
                        <Label htmlFor="time-picker" className="px-1">
                          Time
                        </Label>
                        <Input
                          type="time"
                          id="time-picker"
                          value={time}
                          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                          onChange={(e) => setTime(e.target.value)}
                        />
                        <input type="hidden" name="time" value={time} />
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="priority">Prioridade</Label>
                      <Select value={valor} onValueChange={setValor}>
                        <SelectTrigger>
                          <SelectValue
                            id="priority"
                            placeholder="Escolha a prioridade"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Prioridades</SelectLabel>
                            <SelectItem value="HIGH">Alta</SelectItem>
                            <SelectItem value="MEDIUM">Média</SelectItem>
                            <SelectItem value="LOW">Baixa</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="priority" value={valor} />
                    </div>
                  </div>
                </div>
                <DialogFooter className="mt-4 flex items-center gap-2">
                  {successMessage && (
                    <div className="text-sm text-green-500 mr-auto">
                      {successMessage}
                    </div>
                  )}
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription className="text-muted-foreground">
          Organize seu cronograma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingActivities?.map((activity, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 justify-between">
                  <h4 className="text-sm font-medium text-foreground">
                    {activity.act_name}
                  </h4>
                  <Badge
                    variant="outline"
                    className={
                      priorityColors[
                        activity.priority as keyof typeof priorityColors
                      ].className
                    }
                  >
                    {
                      priorityColors[
                        activity.priority as keyof typeof priorityColors
                      ].label
                    }
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>
                        {activity.dueAt &&
                          format(new Date(activity.dueAt), "dd MMM',' HH:mm", {
                            locale: ptBR,
                          })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{activity.subject}</span>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="cursor-pointer" onClick={() => handleDeleteUpcoming(activity.id)}><Badge className="p-1" variant="destructive"><Trash/></Badge></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

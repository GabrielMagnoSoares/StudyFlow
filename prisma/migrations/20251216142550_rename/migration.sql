/*
  Warnings:

  - You are about to drop the column `title` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `act_name` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "title",
ADD COLUMN     "act_name" TEXT NOT NULL;

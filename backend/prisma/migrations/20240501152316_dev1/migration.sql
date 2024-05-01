-- CreateTable
CREATE TABLE "Consumer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "currentBmi" TEXT NOT NULL,
    "currentBmiStage" TEXT NOT NULL,
    "diet" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,

    CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cook" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Cook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "consumerId" INTEGER NOT NULL,
    "cookId" BIGINT,
    "orderPlaced" BOOLEAN NOT NULL DEFAULT false,
    "orderAccepted" BOOLEAN NOT NULL DEFAULT false,
    "recipeId" BIGINT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_email_key" ON "Consumer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cook_email_key" ON "Cook"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Order_cookId_key" ON "Order"("cookId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "Consumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

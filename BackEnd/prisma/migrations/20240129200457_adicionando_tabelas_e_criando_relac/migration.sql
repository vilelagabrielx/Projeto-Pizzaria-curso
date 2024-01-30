/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_category_id_fkey";

-- DropTable
DROP TABLE "Categories";

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "t_Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_Categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_Orders" (
    "id" TEXT NOT NULL,
    "table" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_Order_Itens" (
    "id" TEXT NOT NULL,
    "ammount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "t_Order_Itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "t_Products" ADD CONSTRAINT "t_Products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "t_Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_Order_Itens" ADD CONSTRAINT "t_Order_Itens_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "t_Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_Order_Itens" ADD CONSTRAINT "t_Order_Itens_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "t_Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

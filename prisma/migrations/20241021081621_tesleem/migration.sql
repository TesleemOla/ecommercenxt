-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "price" INTEGER NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "currentStock" INTEGER NOT NULL,
    "avgReview" INTEGER NOT NULL,
    "totalNoOfReviews" INTEGER NOT NULL,
    "images" TEXT[],
    "sizes" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "reviewerid" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "stars" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToReview" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToReview_AB_unique" ON "_ProductToReview"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToReview_B_index" ON "_ProductToReview"("B");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerid_fkey" FOREIGN KEY ("reviewerid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToReview" ADD CONSTRAINT "_ProductToReview_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToReview" ADD CONSTRAINT "_ProductToReview_B_fkey" FOREIGN KEY ("B") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

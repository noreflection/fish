using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using domain.Models;

namespace domain.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170712211647_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("domain.Models.Author", b =>
                {
                    b.Property<int>("AuthorId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorName");

                    b.Property<int>("BooksCount");

                    b.HasKey("AuthorId");

                    b.ToTable("Authors");
                });

            modelBuilder.Entity("domain.Models.Book", b =>
                {
                    b.Property<int>("BookId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AuthorId");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int?>("ProjectId");

                    b.HasKey("BookId");

                    b.HasIndex("AuthorId");

                    b.HasIndex("ProjectId");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("domain.Models.Chapter", b =>
                {
                    b.Property<int>("ChapterId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BookId");

                    b.Property<int>("ChapterEndPage");

                    b.Property<string>("ChapterName");

                    b.Property<int>("ChapterStartPage");

                    b.HasKey("ChapterId");

                    b.HasIndex("BookId");

                    b.ToTable("Chapters");
                });

            modelBuilder.Entity("domain.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("ProjectId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("domain.Models.Book", b =>
                {
                    b.HasOne("domain.Models.Author")
                        .WithMany("Books")
                        .HasForeignKey("AuthorId");

                    b.HasOne("domain.Models.Project")
                        .WithMany("Books")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("domain.Models.Chapter", b =>
                {
                    b.HasOne("domain.Models.Book")
                        .WithMany("Chapters")
                        .HasForeignKey("BookId");
                });
        }
    }
}

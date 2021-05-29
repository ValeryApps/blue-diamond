using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class DataDbContext:IdentityDbContext<User, Role, int,  IdentityUserClaim<int>, 
        UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataDbContext(DbContextOptions options):base(options){}
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<StaffMember> StaffMembers { get; set; }
        public DbSet<Article> Articles { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<StudentCourse>()
                .HasOne(x => x.Student)
                .WithMany(x => x.StudentCourses)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<StudentCourse>()
                .HasOne(x => x.Course)
                .WithMany(x => x.StudentCourses)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(k=>new {k.RoleId, k.UserId});
                
                userRole.HasOne(r => r.Role)
                    .WithMany(ur => ur.UserRoles)
                    .HasForeignKey(fk => fk.RoleId)
                    .IsRequired();

                userRole.HasOne(u => u.User)
                    .WithMany(ur => ur.UserRoles)
                    .HasForeignKey(fk => fk.UserId)
                    .IsRequired();
            });
        }
    }
}
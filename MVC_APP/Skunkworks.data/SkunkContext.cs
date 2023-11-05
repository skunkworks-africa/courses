using Skunkworks.data.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;

namespace Skunkworks.data
{
    public class SkunkContext : DbContext
    {
        public SkunkContext() : base("SkunkContext")
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Skills> Skills { get; set; }
        public DbSet<Projects> Projects { get; set; }
    }
}

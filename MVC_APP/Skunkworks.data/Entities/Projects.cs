using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Skunkworks.data.Entities
{
    public class Projects : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string About { get; set; }
        public string DueDate { get; set; }
        public string Budget { get; set; }
        public string Links { get; set; }
        public string Status { get; set; }
        public int UserId { get; set; }
        //public virtual User User { get; set; }

    }
}

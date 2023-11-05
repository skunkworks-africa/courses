using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Skunkworks.data.Models
{
    public class ProjectList
    {
        public string Name { get; set; }
        public string About { get; set; }
        public string DueDate { get; set; }
        public string Budget { get; set; }
        public string Links { get; set; }
        public int AssignTo { get; set; }
        public string Status { get; set; }
    }
}

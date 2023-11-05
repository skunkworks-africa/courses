using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Skunkworks.data.Entities
{
    public abstract class BaseEntity
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }
        [Required]
        public DateTime DateModified { get; set; }
    }
}
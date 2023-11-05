using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Skunkworks.data.Models
{
    public class RegistrationModelAdmin : RegistrationModel
    {
        [Required]
        [Display(Name = "Is Admin")]
        public bool IsAdmin { get; set; }
    }
}
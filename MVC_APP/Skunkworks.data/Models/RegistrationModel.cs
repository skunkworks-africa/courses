using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Skunkworks.data.Models
{
    public class RegistrationModel
    {
        public int Id { get; set; }
        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Required]
        [Display(Name = "Email Address")]
        public string EmailAddress { get; set; }

        [Display(Name = "Contact number")]
        public string ContactNumber { get; set; }

        [Display(Name = "Date of birth")]
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime DateOfBirth { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        [Compare("Password", ErrorMessage = "Confirm password doesn't match, Type again !")]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm Password")]
        public string ConfirmPassword { get; set; }


        [Display(Name = "Street Name and Number")]
        public string StreetNameAndNumber { get; set; }

        public string Suburb { get; set; }

        public string City { get; set; }

        [Display(Name = "Postal Code")]
        public int PostalCode { get; set; }

        public string Province { get; set; }
        public string UserRole { get; set; }
    }
}

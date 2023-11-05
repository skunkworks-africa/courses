using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Skunkworks.data.Entities
{
    public class User : BaseEntity
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        public string ContactNumber { get; set; }
        //public DateTime? DateOfBirth { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string ResetPasswordCode { get; set; }
        [Required]
        public bool IsEmailVerified { get; set; }
        [Required]
        public System.Guid ActivationCode { get; set; }
        public bool IsAdmin { get; set; }
        public string StreetNameAndNumber { get; set; }
        //public string Suburb { get; set; }
        public string City { get; set; }
        //public int PostalCode { get; set; }
        public string Province { get; set; }
        public string Image { get; set; }
        public string UserRole { get; set; }
        public string About { get; set; }
        public string JobTitle { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string LinkedIn { get; set; }
        //public virtual ICollection<Projects> Projects { get; set; }

        public virtual Projects Projects { get; set; }
    }
}
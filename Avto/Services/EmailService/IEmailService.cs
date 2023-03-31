using Avto.Models;
using Avto.Models.Dtos;

namespace Avto.Services.EmailService;

public interface IEmailService
{
    Task SendEmailAsync(EmailDto request);
    string CreateBody(ApplicationModel application);
    string CreateBody(ReviewModel review);
}
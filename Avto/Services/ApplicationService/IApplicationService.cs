using Avto.Models;

namespace Avto.Services.ApplicationService;

public interface IApplicationService
{
    Task SaveApplicationAsync(ApplicationModel application);
}
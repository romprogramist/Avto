using Avto.Services.ProductService;
using Microsoft.AspNetCore.Mvc;

namespace Avto.Controllers.API;

[ApiController]
[Route("api/product")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;
    
    public ProductController(IProductService productService)
    {
        _productService = productService;
    }
    
    
    
}
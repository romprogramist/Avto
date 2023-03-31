namespace Avto.Data;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public string ImageThumbnail { get; set; } = string.Empty;
    public int Order { get; set; }
    public bool IsAvailable { get; set; }
    public List<Product> Products { get; set; } = new();
}
namespace SecureWebApp.Models;

public class Book
{
    public int Id { get; set; }
    public string Isbn { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Publisher { get; set; } = string.Empty;
    public int? PublishedYear { get; set; } = 0;
    public decimal? Price { get; set; } = 0;
}
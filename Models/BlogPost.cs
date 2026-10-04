namespace macchindrabagstore.Models;

public class BlogPost
{
    public string Slug { get; set; } = "";
    public string Title { get; set; } = "";
    public string Excerpt { get; set; } = "";
    public string ContentHtml { get; set; } = "";
    public string FeaturedImage { get; set; } = "";
    public string Category { get; set; } = "";
    public string PublishedDate { get; set; } = "";
    public string ReadTime { get; set; } = "";
    public string MetaDescription { get; set; } = "";
}

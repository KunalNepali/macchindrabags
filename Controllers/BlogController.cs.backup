using Microsoft.AspNetCore.Mvc;
using macchindrabagstore.Models;

namespace macchindrabagstore.Controllers;

[Route("blog")]
public class BlogController : Controller
{
    private static readonly List<BlogPost> Posts =
    [
        new BlogPost
        {
            Slug = "ladies-bag-handle-repair",
            Title = "Ladies Bag Handle Repair: Can a Broken Handle Be Fixed?",
            Excerpt = "A damaged or detached ladies bag handle does not always mean you need to replace the entire bag. Here is what we check during a handle repair.",
            FeaturedImage = "/images/repairs/ladies_bag_handle_fixed.png",
            Category = "Bag Repair",
            PublishedDate = "October 4, 2026",
            ReadTime = "4 min read",
            MetaDescription = "Learn how a damaged ladies bag handle can be repaired or replaced, with a real repair example from New Macchindra Leather and Bag Store in Lagankhel, Lalitpur.",
            ContentHtml = """
                <p>A broken or damaged handle is one of the most common problems we see with ladies bags. The good news is that a damaged handle does not always mean the entire bag needs to be replaced.</p>

                <h2>What usually causes a bag handle to fail?</h2>

                <p>Handles can become weak because of regular use, heavy loads, damaged stitching, worn-out material, or stress around the point where the handle is attached to the bag.</p>

                <p>In many cases, the visible problem is only part of the damage. Before repairing the handle, we check the attachment points and the surrounding material.</p>

                <h2>How we approach the repair</h2>

                <ol>
                    <li>We inspect the damaged handle and stitching.</li>
                    <li>We check the carrying points for additional weakness.</li>
                    <li>We determine whether the existing handle can be repaired or should be replaced.</li>
                    <li>When replacement is needed, we select suitable material and prepare the new handle.</li>
                    <li>The handle is carefully positioned and securely stitched into place.</li>
                    <li>We check the finished repair before returning the bag.</li>
                </ol>

                <h2>Repair instead of throwing away</h2>

                <p>If the rest of your bag is still in good condition, repairing the damaged handle can give it a new lease of life.</p>

                <p>At New Macchindra Leather and Bag Store, we handle different types of <a href="/#services">bag repair services</a> at our store in Lagankhel, Lalitpur.</p>

                <p>You can also <a href="/#repairs">see examples of our repair work</a> before bringing your bag to the store.</p>

                <div class="blog-callout">
                    <strong>Have a damaged bag?</strong>
                    <span>Bring it to our Lagankhel store so we can inspect the problem and explain the repair options.</span>
                </div>
            """
        },

        new BlogPost
        {
            Slug = "laptop-bag-zip-repair",
            Title = "Laptop Bag Zip Stuck or Broken? What You Can Do",
            Excerpt = "A stuck or damaged laptop bag zip can make an otherwise usable bag difficult to carry. Learn what we check before replacing the zipper.",
            FeaturedImage = "/images/repairs/laptop_bag_zip.png",
            Category = "Laptop & Office Bags",
            PublishedDate = "October 4, 2026",
            ReadTime = "4 min read",
            MetaDescription = "Laptop bag zip stuck or broken? Learn what to check and when a laptop or office bag zipper can be repaired or replaced.",
            ContentHtml = """
                <p>A laptop or office bag can still be perfectly usable even when its zipper starts causing problems. A stuck slider, damaged teeth, broken stitching or a damaged zipper section can make the bag difficult to use.</p>

                <h2>Why does a laptop bag zip stop working?</h2>

                <p>Common problems include a damaged zipper slider, worn zipper teeth, torn fabric around the zipper, or stitching that has come loose.</p>

                <h2>Repair or complete zipper replacement?</h2>

                <p>The right solution depends on the condition of the zipper. Sometimes the problem can be fixed without replacing the entire zipper. If the zipper itself is badly damaged, replacement may be the better option.</p>

                <p>We inspect the bag first and determine what needs to be repaired or replaced.</p>

                <h2>Don't replace the whole bag too quickly</h2>

                <p>If the laptop compartment, padding, body and other parts of your bag are still in good condition, repairing the zipper can be a practical option.</p>

                <p>Our <a href="/#services">bag repair services</a> cover zipper, stitching and other common problems with laptop, office and everyday bags. You can also <a href="/#repairs">see our repair work</a> for examples.</p>

                <div class="blog-callout">
                    <strong>Having a zipper problem?</strong>
                    <span>Bring your laptop, office or other bag to our Lagankhel store for inspection.</span>
                </div>
            """
        },

        new BlogPost
        {
            Slug = "school-bag-zip-repair",
            Title = "School Bag Zip Broken? Repair or Replace?",
            Excerpt = "A broken school bag zipper can make an otherwise usable school bag difficult to use. Here is what we look at before repairing it.",
            FeaturedImage = "/images/repairs/repair_school_bag_zip.png",
            Category = "School Bags",
            PublishedDate = "October 4, 2026",
            ReadTime = "3 min read",
            MetaDescription = "School bag zip broken or damaged? Learn when a school bag zipper can be repaired or replaced at New Macchindra Leather and Bag Store.",
            ContentHtml = """
                <p>School bags go through a lot of daily use. Books, stationery and other items put repeated pressure on zippers and stitching, so zipper problems are common.</p>

                <h2>What can go wrong?</h2>

                <p>The zipper may become stuck, the slider may stop closing the teeth properly, or the stitching around the zipper may tear away from the bag.</p>

                <h2>What do we check?</h2>

                <p>We first inspect the zipper and the surrounding fabric. This helps us determine whether the existing zipper can be repaired or whether a new zipper needs to be fitted.</p>

                <p>A proper repair should restore the functionality of the bag while keeping the finishing neat and secure.</p>

                <h2>Bring the bag before the damage gets worse</h2>

                <p>A small zipper or stitching problem can sometimes become a larger tear if the bag continues to be used heavily.</p>

                <p>Our <a href="/#services">bag repair services</a> include zipper, stitching and other common school bag problems. You can also <a href="/#repairs">see our repair work</a> to understand the type of repairs we handle.</p>

                <div class="blog-callout">
                    <strong>School bag needs repair?</strong>
                    <span>Bring it to New Macchindra Leather and Bag Store in Lagankhel, Lalitpur.</span>
                </div>
            """
        },

        new BlogPost
        {
            Slug = "suitcase-wheel-and-handle-repair",
            Title = "Suitcase Wheel or Handle Broken? What Can Be Repaired?",
            Excerpt = "Broken wheels, handles and other luggage problems can make travelling difficult. Here's what we inspect when repairing luggage.",
            FeaturedImage = "/images/repairs/repair_luggage.png",
            Category = "Luggage Repair",
            PublishedDate = "October 4, 2026",
            ReadTime = "4 min read",
            MetaDescription = "Suitcase wheel or handle broken? Learn about common luggage repair problems and what can be inspected and repaired in Lagankhel, Lalitpur.",
            ContentHtml = """
                <p>Luggage takes considerable stress during travel. Wheels, handles, zippers and stitching can all experience damage over time.</p>

                <h2>Common luggage problems</h2>

                <ul>
                    <li>Damaged or loose wheels</li>
                    <li>Broken or damaged handles</li>
                    <li>Stitching problems</li>
                    <li>Damaged zippers or chains</li>
                    <li>Broken attachment points</li>
                </ul>

                <h2>Can a suitcase be repaired?</h2>

                <p>It depends on the type and extent of the damage. We inspect the affected area and determine what can be repaired, replaced or reinforced.</p>

                <p>For luggage that is otherwise in good condition, repairing a damaged component can be a practical alternative to replacing the entire suitcase.</p>

                <p>Learn more about our <a href="/#services">luggage repair services</a>, or <a href="/#repairs">see examples of our repair work</a> before bringing your suitcase to our Lagankhel store.</p>

                <div class="blog-callout">
                    <strong>Have damaged luggage?</strong>
                    <span>Please bring it to our Lagankhel store for inspection. Repair services are provided at our store.</span>
                </div>
            """
        },

        new BlogPost
        {
            Slug = "leather-bag-polishing-and-care",
            Title = "Leather Bag Looking Dull? Understanding Leather Care",
            Excerpt = "Regular use can affect the appearance of leather bags. Learn why proper cleaning and polishing can help maintain leather items.",
            FeaturedImage = "/images/repairs/repair_jacket_polishing.png",
            Category = "Leather Care",
            PublishedDate = "October 4, 2026",
            ReadTime = "4 min read",
            MetaDescription = "Learn about leather bag care, polishing and restoration and how proper leather maintenance can improve the appearance of leather items.",
            ContentHtml = """
                <p>Leather items can gradually lose their original appearance through regular use, dust, friction and exposure to different environments.</p>

                <h2>Why does leather look dull?</h2>

                <p>Regular handling and exposure to dust and moisture can affect the appearance of leather. Surface wear can also become more noticeable over time.</p>

                <h2>Leather care is more than simply adding shine</h2>

                <p>Proper leather care starts with understanding the material and its condition. Cleaning, conditioning and polishing should be approached carefully so that the treatment is appropriate for the item.</p>

                <p>We provide <a href="/#services">leather care and polishing services</a> for suitable leather items at our Lagankhel store.</p>

                <p>You can also <a href="/#repairs">see examples of our repair and restoration work</a> before bringing your leather item to us.</p>

                <div class="blog-callout">
                    <strong>Need leather care?</strong>
                    <span>Bring your leather item to our store so we can inspect its condition and discuss the appropriate care.</span>
                </div>
            """
        },

        new BlogPost
        {
            Slug = "rexine-bag-surface-repair",
            Title = "Rexine or Synthetic Leather Peeling: Can It Be Repaired?",
            Excerpt = "Peeling synthetic leather can make a bag look worn even when the bag is still usable. Here are some things to consider before replacing it.",
            FeaturedImage = "/images/repairs/rexine1.png",
            Category = "Leather & Rexine",
            PublishedDate = "October 4, 2026",
            ReadTime = "3 min read",
            MetaDescription = "Rexine or synthetic leather peeling on a bag? Learn what can be inspected and repaired and when replacement may be necessary.",
            ContentHtml = """
                <p>Rexine and other synthetic leather materials can peel or deteriorate with age and regular use. This can affect the appearance of an otherwise functional bag.</p>

                <h2>Why does rexine peel?</h2>

                <p>Surface deterioration can happen because of age, repeated friction, environmental conditions and general wear.</p>

                <h2>Can the surface be repaired?</h2>

                <p>The possible repair depends on how extensive the damage is and which part of the material has deteriorated. We inspect the affected area before deciding what type of repair or restoration is appropriate.</p>

                <p>In some cases, repair can help extend the useful life of an item rather than immediately replacing it.</p>

                <p>For suitable items, our <a href="/#services">bag and leather care services</a> can help address different types of surface and material problems. You can also <a href="/#repairs">see our repair work</a> for examples.</p>

                <div class="blog-callout">
                    <strong>Rexine peeling?</strong>
                    <span>Bring the item to our Lagankhel store for an inspection.</span>
                </div>
            """
        }
    ];

    [HttpGet("")]
    public IActionResult Index()
    {
        ViewData["Title"] = "Bag Repair & Leather Care Blog";
        ViewData["Description"] =
            "Bag repair tips, luggage repair advice, leather care information and real repair stories from New Macchindra Leather and Bag Store in Lagankhel, Lalitpur.";

        return View(Posts);
    }

    [HttpGet("{slug}")]
    public IActionResult Details(string slug)
    {
        var post = Posts.FirstOrDefault(
            p => p.Slug.Equals(slug, StringComparison.OrdinalIgnoreCase));

        if (post == null)
        {
            return NotFound();
        }

        ViewData["Title"] = post.Title;
        ViewData["Description"] = post.MetaDescription;
        ViewData["OgType"] = "article";
        ViewData["OgImage"] = post.FeaturedImage;
        ViewData["ArticlePublishedDate"] = "2026-10-04";
        ViewData["ArticleCategory"] = post.Category;

        return View(post);
    }
}

import { Card, CardBody, Button } from "@heroui/react";

const Blog = () => {
  const featuredPosts = [
    {
      title: "Top 10 Local Attractions Near Our Hotel",
      date: "March 20, 2024",
      category: "Local Guide",
      image: "https://picsum.photos/seed/pool/800/400",
      excerpt:
        "Discover the must-visit attractions and hidden gems in our neighborhood.",
    },
    {
      title: "The Art of Fine Dining: Our Chef's Signature Dishes",
      date: "March 18, 2024",
      category: "Dining",
      image: "https://picsum.photos/seed/pool/800/400",
      excerpt:
        "Take a culinary journey through our executive chef's most celebrated creations.",
    },
    {
      title: "Sustainable Luxury: Our Green Initiatives",
      date: "March 15, 2024",
      category: "Sustainability",
      image: "https://picsum.photos/seed/pool/800/400",
      excerpt:
        "Learn about our commitment to environmental responsibility while maintaining luxury standards.",
    },
  ];

  const categories = [
    "Local Guide",
    "Dining",
    "Sustainability",
    "Events",
    "Wellness",
    "Travel Tips",
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stories, insights, and updates from our hotel
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
          <div className="space-y-6">
            {featuredPosts.map((post, index) => (
              <Card key={index}>
                <CardBody>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-primary mb-2">{post.category}</p>
                      <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                      <p className="text-gray-500 mb-2">{post.date}</p>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Button color="primary" variant="solid">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    color="primary"
                    variant="light"
                    className="w-full justify-start">
                    {category}
                  </Button>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="mt-6">
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest posts and news
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <Button color="primary" variant="solid" className="w-full">
                  Subscribe
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;

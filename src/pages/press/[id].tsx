import { Card, CardBody, Button } from "@heroui/react";
import { pressReleases } from "./press.article";
import { useRouter } from "next/router";
import Link from "next/link";

const PressDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the article based on the ID
  const article = pressReleases[Number(id)];

  if (!article) {
    return (
      <div className="container mx-auto py-16 m-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/press">
            <Button color="primary" variant="solid">
              Back to Press Room
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 m-5">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardBody>
            <div className="mb-8">
              <Link href="/press">
                <Button color="primary" variant="light" className="mb-4">
                  ← Back to Press Room
                </Button>
              </Link>
              <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
              <p className="text-gray-500">{article.date}</p>
            </div>
            <div className="prose max-w-none">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PressDetail; 
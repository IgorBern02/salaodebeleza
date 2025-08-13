type TestimonialsSectionCardProps = {
  text: string;
  author: string;
};

export const TestimonialsSectionCard = ({
  text,
  author,
}: TestimonialsSectionCardProps) => {
  return (
    <>
      {/* Card 1 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
        <p className="text-gray-700 mb-4">{text}</p>
        <p className="font-semibold text-gray-800">{author}</p>
      </div>
    </>
  );
};

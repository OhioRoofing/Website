import Link from "next/link";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-green-600">Thank You!</h1>
      <p className="text-lg text-gray-700 mt-4">
        Your submission has been received successfully.
      </p>
      <button 
        onClick={handleBack}
        className="bg-primary px-6 py-3 mt-3 text-white rounded-lg hover:bg-primary/90 transition"
      >
        Back to website
      </button>
    </div>
  );
};

export default ThankYou;

import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1667860234741-0e500d0e5ba5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Turn Ideas into Stunning AI Art
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Generate high-quality images from simple text prompts.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              {/* <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Generate Now
              </Button> */}
              <button className="btn btn-outline border-white">
                Generate Now
              </button>
            </Link>

            <Link href="/pricing">
              <button className="btn btn-outline">View Pricing</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

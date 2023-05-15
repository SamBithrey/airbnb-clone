import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";

async function getExploreData() {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
    const data = await res.json();
    return data;
  } catch (error: any | unknown) {
    console.log(error);
  }
}

async function getCardData() {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
    const data = await res.json();
    return data;
  } catch (error: any | unknown) {
    console.log(error);
  }
}

export default async function Page() {
  const exploreData: exploreData[] = await getExploreData();
  const cardData: cardData[] = await getCardData();

  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((data) => (
              <SmallCard key={data.img} data={data} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((data) => (
              <MediumCard key={data.img} data={data} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

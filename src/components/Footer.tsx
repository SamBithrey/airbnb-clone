type Props = {};

function Footer({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="footerColumns">
        <h5 className="font-bold uppercase">About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="footerColumns">
        <h5 className="font-bold uppercase">Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>But its a pretty neat clone</p>
        <p>Portfolio filler</p>
        <p>Sam Bithrey</p>
      </div>
      <div className="footerColumns">
        <h5 className="font-bold uppercase">Tech Stack</h5>
        <p>NextJS</p>
        <p>TailwindCSS</p>
        <p>React</p>
        <p>MapBox</p>
        <p>Something else</p>
      </div>
      <div className="footerColumns">
        <h5 className="font-bold uppercase">Support</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>#Learning</p>
        <p>Secrets</p>
        <p>Easter Eggs</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;

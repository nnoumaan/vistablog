import Post from "../posts/Post";
export default function Posts() {
  return (
    <div className="posts" style={{flex:'9',display:'flex',flexWrap:'wrap',margin:'20px'}}>
      <Post img="https://i.pinimg.com/originals/07/03/6e/07036e12e9ca047f542437befa8872d3.jpg" />
      <Post img="https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg" />
      <Post img="https://wallpaperaccess.com/full/192243.jpg"/>
      <Post img="https://c1.wallpaperflare.com/preview/637/266/486/tree-old-nature-country-old-tree-black-and-white.jpg"/>
      <Post img="https://w0.peakpx.com/wallpaper/281/1023/HD-wallpaper-coming-home-luminos-orange-luna-lup-yellow-wolf-silhouette-moon-fantasy-night.jpg"/>
    </div>
  );
}

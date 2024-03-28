import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="flex justify-between gap-8 my-20 mx-8">
        <article className="p-8 shadow-lg bg-gray-50 shadow-gray-300 rounded-md">
          <h2 className="font-bold mb-4 text-center text-2xl">
            Create Account
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            error, corporis itaque totam adipisci nobis aperiam accusamus ab
            odio in.
          </p>
        </article>
        <article className="p-8 shadow-lg bg-gray-50 shadow-gray-300 rounded-md">
          <h2 className="font-bold mb-4 text-center text-2xl">
            Add Your Links
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            temporibus tempore, dolores, et vel perspiciatis, commodi
            perferendis.
          </p>
        </article>
        <article className="p-8 shadow-lg bg-gray-50 shadow-gray-300 rounded-md">
          <h2 className="font-bold mb-4 text-center text-2xl">
            Share with World
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            quisquam quidem sed dolore fuga blanditiis facere ut consequatur,
            soluta accusamus.
          </p>
        </article>
      </section>

      <section className="flex gap-8 bg-gray-100 items-center justify-between p-4">
        <article className="w-1/2">
          <h2 className="text-lg font-bold uppercase">Our Goal</h2>
          <p className=" py-2 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            at molestias, officiis voluptates nesciunt saepe voluptatum,
            architecto deleniti omnis voluptatem aut distinctio mollitia. Ipsum
            nemo et consequatur, optio corrupti ipsam error sit recusandae qui,
            dolores omnis doloribus reprehenderit veritatis odio animi sapiente
            dignissimos labore nobis velit totam temporibus necessitatibus
            praesentium. Porro, sapiente! Ducimus, ad nihil aut, sapiente nemo
            est officia aliquid ipsa aperiam esse perspiciatis earum maxime
            voluptas quod eum voluptates magni saepe asperiores? Quo magnam
            nostrum impedit. Expedita atque velit vel, eius quae in quod nam
            quaerat a distinctio error nostrum laboriosam numquam, natus non
            excepturi iusto. Provident fugit eum nostrum, expedita magni ad
            veritatis illo et cum amet nam, aliquid nisi voluptates saepe
            perspiciatis repellendus veniam alias. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Assumenda esse accusantium minus non
            culpa maxime iusto. Perferendis possimus nulla quasi.
          </p>
          <p className=" py-2 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            labore debitis rem dignissimos! Ex quaerat voluptatum nisi illum
            dolorem doloribus qui beatae quia eaque cupiditate! Rem veritatis
            fugiat similique ipsum quia, mollitia eum repellendus asperiores
            itaque aliquid culpa praesentium fugit?
          </p>
        </article>
        <article>
          <img src="/chart-1.png" alt="popularity chart" />
        </article>
      </section>

      <section className="my-20">
        <div className="bg-gradient-to-b from-purple-100 to-purple-200  rounded-lg w-3/5 drop-shadow-lg mx-auto px-8 py-4 text-center">
          <p className="text-lg font-semibold">
            For Help or Partnership feel Free to Contact Us
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 transition-colors rounded-md px-6 py-2 font-semibold drop-shadow-md mt-6">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

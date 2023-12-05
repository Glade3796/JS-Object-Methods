console.log("123");

let car = {
  make: "Ford",
  model: "fiesta",
  colour: "yellow",
  printCar: function () {
    const p = document.createElement("p");
    p.textContent = `Make: ${car.make}, Model: ${car.model}, Colour: ${car.colour}`;
    document.body.appendChild(p);
  },
};

let book = {
  title: "Very Good Book",
  author: "Writing Goodly",
  pages: 230,
  blurb:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga voluptatem totam laudantium ducimus quasi quae soluta doloribus deleniti autem recusandae maxime pariatur, modi eos rerum voluptas voluptatum placeat velit hic natus dolorum! Dicta molestias minus, sint repellat cumque id quia laborum nisi deleniti, quam modi earum sit expedita ad inventore. Quia distinctio debitis iusto consequatur numquam excepturi, non consectetur accusamus deleniti tempora exercitationem aspernatur neque perferendis sint, voluptatem velit dolor voluptatum quas nemo reprehenderit doloribus soluta. Impedit, quisquam rerum ipsum quis consectetur necessitatibus harum commodi. Possimus officia atque nihil totam quos iusto obcaecati itaque sed enim fugit necessitatibus tenetur exercitationem voluptas soluta et quam explicabo, ex fuga, modi autem! Exercitationem accusamus omnis necessitatibus quaerat placeat corrupti accusantium mollitia! Quaerat temporibus iure nesciunt deserunt voluptatibus, soluta veritatis, possimus obcaecati fuga aliquid nostrum? Assumenda sint amet minus asperiores voluptas, quidem repellat numquam possimus architecto eligendi aspernatur qui optio accusantium nisi, dolor dignissimos maiores sed nesciunt? Dolorum placeat natus quod est modi itaque debitis assumenda atque, facilis consectetur illo beatae fuga. Veniam at minus voluptate saepe? Mollitia error sunt reprehenderit ab consectetur non, quam tempore ipsam vero quia? Laboriosam modi odit, quaerat ex maiores nisi alias blanditiis vitae dolore odio eaque dolor optio excepturi neque a id facere rem impedit libero. Aspernatur iure porro, nostrum aut amet temporibus quo, animi, totam pariatur ad culpa similique nemo odio recusandae necessitatibus. Provident doloremque sit enim sequi, aspernatur blanditiis labore nemo nulla quod suscipit sed iusto asperiores quisquam voluptatibus reiciendis, ducimus id voluptas! Obcaecati enim totam provident eum facere vel. Ab facere velit vitae est numquam a tempora nam illum? Quo corrupti nihil, non nostrum tempore consequuntur voluptate, laboriosam nulla eos rerum sed laborum libero dolores impedit aliquam aut officiis illo. Voluptatem mollitia quae veritatis molestiae laudantium qui obcaecati, ea, voluptatibus error autem cumque, odit magni! Animi molestias alias voluptates sit accusamus nesciunt amet dolores! Velit consequuntur inventore corporis explicabo, nobis omnis voluptatem nam eligendi est, ut magni provident dicta eius quibusdam fugiat pariatur unde debitis hic vel ipsum alias ab. Corporis dolorem sapiente ex architecto dolore dolor neque, laudantium, asperiores eveniet placeat inventore molestias in. Necessitatibus nemo vitae maiores earum deleniti quas reprehenderit voluptatibus, molestiae debitis saepe possimus eos corporis unde atque vero laboriosam perferendis dolores blanditiis rem illum aliquam illo nam. Aut amet velit molestiae fugit doloremque, officia accusantium similique voluptatem in at incidunt mollitia! Vitae officia, cumque est animi, dolorem officiis voluptatum quia sequi laudantium modi reiciendis sit veniam ipsum ea quo itaque dignissimos vero magni, assumenda qui nemo perspiciatis. Labore numquam et, voluptatibus quo aut corrupti provident dolorem iure. Sint sit aliquam maiores quos adipisci eligendi recusandae doloremque laboriosam illum nulla et incidunt maxime dicta ab, esse tempore provident! Vitae voluptate nihil voluptatem. Eaque debitis eius rem magni minima et error aliquid assumenda recusandae, perspiciatis ut officiis similique ex dolore voluptatum odit, veniam aut dolorem id corporis totam laboriosam, nulla velit? Facilis vel incidunt natus sapiente atque earum pariatur et error, aliquam aliquid similique provident sequi illum molestiae libero dolore dignissimos!",
  printBook: function () {
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h2.textContent = book.title;
    h3.textContent = `written by the esteemed ${book.author}`;
    p.textContent = `${book.author} delights us over ${book.pages} pages. ${book.title} is an  example of good writing. ${book.blurb}`;
    document.body.appendChild(h3);
    document.body.appendChild(h2);
    document.body.appendChild(p);
  },
};

const comic = {
  title: "Sandman",
  issue: "#1",
  author: "Neil Gaiman",
  editorial: "DC",
  advertising: function () {
    return `Everyone must read -> ${this.title}`;
  },
};

console.log(comic.advertising());

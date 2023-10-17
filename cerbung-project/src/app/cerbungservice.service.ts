import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  genrelist = ["Mystery", "Crime", "Action", "Comedy"];

  cerbungs = [
    {
      title: "Ina's Secret to Cuteness",
      cover_url: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/04/Ninomae-Inanis-Unravel-1.jpg",
      paragraph_count: 3,
      likes: "765",
      genre: "Mystery",
      restricted: false,
      description: "Behind Ninomae Ina'nis' unparalleled cuteness " +
        "lies a well kept secret that is the envy of every girl " +
        "in the world. What could that secret be?",
      author: "A-Chan",
      create_date: "14 Oct 2023",
      paragraphs: [
        {
          content: "Ninomae Ina'nis is undoubtably cute, " +
            "but this ofcourse leaves us with many questions, " +
            "such as how can anyone be this cute? " +
            "What secret does she really keep from the world?",
          author: "A-chan",
          avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_faGvhanosGmtxjQClLxDzpWvnBk0Ecp7Xg&usqp=CAU"
        },
        {
          content: "Such cuteness is simply impossible to replicate, " +
            "many people would like to know her secret behind it. " +
            "Up until now, we are unable to uncover her secrets, " +
            "yet it is now free from her grasp.",
          author: "MumeiMoomin",
          avatar_url: "https://pbs.twimg.com/media/FtUUrrdaYAAo5vB.jpg"
        },
        {
          content: "The secret? it's simple, those squishy hair of hers. " +
            "The pinnacle of her cuteness, and her biggest secret, " +
            "so much so that she lets nobody to touch it. I wonder " +
            "what other secrets she keeps from everyone?",
          author: "ManILoveFauna",
          avatar_url: "https://pbs.twimg.com/media/FyUMpVjaQAE1RAJ.jpg:large"
        },
      ]
    },
    {
      title: "The Great Flip",
      cover_url: "https://www.worldatlas.com/r/w1200-q80/upload/64/de/e3/shutterstock-520729021.jpg",
      paragraph_count: 2,
      likes: "492",
      genre: "Crime",
      restricted: true,
      description: "This is the story behind the Great Flip, " +
      "the biggest scandal of the Silicon Valley " +
      "and SORA's involvement in the scandal.",
      author: "Herbert E. Harry",
      create_date: "14 Oct 2023",
      paragraphs: [
        {
          content: "The day starts as usual, we wake up, get coffee, " +
            "kiss my wife goodbye, and go off to work, as if it's an " +
            "ordinary day. I arrived at my office, the SORA headquarters in SF. " +
            "Not knowing what has happened or what will happen next.",
          author: "Herbert E. Harry",
          avatar_url: "https://www.airspace-review.com/wp-content/uploads/2023/01/F-16-Block-70-first-flight.jpg"
        },
        {
          content: "I arrived at the parking lot, I saw lines of " +
            "unmarked black cars. I told myself that it's probably because of " +
            "another government project our company is working on." +
            "Then I enter the building, there's so many agents, FBI, SEC? " +
            "'Dear, I fear we're facing a problem.'",
          author: "Terry Go",
          avatar_url: "https://asiatimes.com/wp-content/uploads/2023/08/230514-Z-PI315-0224.jpeg"
        },
      ]
    },
  ]

  constructor() { }
}

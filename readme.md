# ChiStreetStory [https://KaraAJC.github.io/chi-street-story](https://KaraAJC.github.io/chi-street-story)
![site header](assets/chistreetstory-header.png)

ChiStreetStory is a site built from a hackathon during the [Nerd Immersion](https://www.nerdery.com/events/nerd-immersion-2017) event, put on by the [Nerdery](https://www.nerdery.com).

## About
![My Nerd immersion Whiteboard](https://lh3.googleusercontent.com/5G9x-9WARvpWlDdFEAkZm8MGnMxKf4HM_5N8NRLi6N8tlybJkI1gLMLS06lWA4UXn7hoghyMHSiXKUTS4KiQxoHQhT57GFV4tPvOyJMLWYSf5H6LFLLahZe9P4Fu2ypw6upVs2u8DSk3DnNcqzDPJ_cD7AkMveojyOZlYBB0KKXtUENJEN7DYeKFLD8Mz0cgYl8lEtRL-mi2crrj42rMPVs6bSwJZQuZC9cFGiALsRA7KHyAUgnF8WJBUUuq8ptB3caWdZ3rSpkrAYk15T0RPmG0HyHiaZQwWmAaLZOaJFOVtwNOoilLncGIZduKcRoXJB3MoRX_-NBQBuR5x0Yk22ZckXYCyRZfklh4LjqRalOffw9FPXULYb03vi_NJjtqq74-DK0maBgbQ1dOcbfH6ZN902YbGkVg_uDK3ctW5krKtnngTHTNVs7KQpIPwB_biVBIz2Nx4aL1_I2LAndz0-oyK1WaGqqE7o3zqc7fhjP2dntfshHDxjio6vpr5nzfRmJfdw5v87qfaZdWh5RVyF40wvVOxzBb0gF8fREsXZbs-emrc-Wga37IlvVBOZkWR-JZFc0TIBhhxNNE1yT-YyAb9900Gf6k43JHldqc5bc=w666-h888-no)
It all started out with a lil' list of things I wanna build, and data sets that sounded interesting. it developed into curiosity about what services 311 provides, and frustration that it's not easy to find out who actually provides those services from Chicago. *Who's in charge around here?!*

### Who Lives, Who Dies, Who Tells Your Story 

I directed my attention towards the Street Names Data set, in the hopes of finding a `Kara Blvd`. It bubbled into a desire to find out: *Who Are these people with streets named after them? How are streets even named?!*

Along Came Chi-Street-Story.
![what I ended up with](assets/chistreetstory-site.png)

WooHoos/Blockers/Curiosities:
- [Google Maps Style](https://mapstyle.withgoogle.com/) Customizing was fascinating!
![Google Maps with style](assets/chistreetstory-stylemap.png)
- Street paths aren't as easy as I thought..
  (start/end not enough)
- I won 3rd place in the hackathon!
![me and Freddy Funko](https://lh3.googleusercontent.com/-fLqYh5--D4LQ1mcjfYmjCp-_G7iyVcIcbtGlrCXWgdU5_lPPpk3CEJLpotfEy5o5olBQU7ITZNObx1ZD0C8G5FeTz8NUtgSnUGTnqPbDS1UbkQWDnNQ5bogAwUE9tQx32STU8I2KeVqL1mxDaSLDOuZGTxQnold85FiRO78EVb-nHJS-6Sgt9fZnKU2cSOGG7E5bWmjE2RCZJ1Q8ZYn_ri7NgY2C0tiFkLOQPZwp9iD1q9ZmfJiF7Bv9Jl3vhb_HlrhT3aY3gMU2YhrDMlKG4z0uPFoj6oEIY5L-Rmwk1H3B2eUUIYX1fhMgI4I-FZmalg3o7sl29C9bgLLFLdsMhuIV9xpV6BiwNM26ONbq7-wrCEeMArwrSN4sTjNpMMe2C-hc7X4g3TcdM7DDPzz71OiH1_7dc8ENPA2TFOeNAghnXThV0zpj0y-OdAp3oKWglGerhdrAiMT9PDqi-VVIY4Y1-ozlqLXqVL-n6Yq6qSI0WAQdwfYLwn3jwQvOjuA9WwEPm3vRAAvVbaVQ0FQvwErZfmHdtKqWTtG2TIsN1a7lHLZ6fevC6dwKHk1LrkYD-vp2mjeFUoTgrCTYWaQsCH7OxFS0WXKlczZqMMRAAg=w1184-h888-no)

Next Steps:
- get a link(or content) on the history of that name
- map a path, and highlight the entire street on a map

## Goals

- [x] use the Chicago Data Portal
- [x] Find a street by name
- [ ] get a link(or content) on the history of that name(or street)
- [ ] highlight the street on a map

## Stretch Goals

- [ ] have a pronounciation of the street name "in chicagoan"
  - (maybe allow for folks to input a pronounciation)
- [ ] add honorary street names
- [ ] have a way for folks to request a street to be changed
- [ ] have a way to determine the cost of the name street change
  - only cost of street sign replacements, total cost would include maps, etc. [source](http://www.chicagomag.com/Chicago-Magazine/The-312/September-2013/Chicago-Street-Names/)

## Tools & Resources

  - Chicago Data Portal
    - [Chicago Street Names Dataset](https://data.cityofchicago.org/Transportation/Chicago-Street-Names/i6bp-fvbx/data)
    - [API for above dataset](https://dev.socrata.com/foundry/data.cityofchicago.org/pasq-g8mx)
  - Google Maps API
  - Materialize
  - [Chicagology info on street names](https://chicagology.com/chicagostreets/streetnames/)
  - [ChicagoMag article on what it takes to rename a street in Chicago](http://www.chicagomag.com/Chicago-Magazine/The-312/September-2013/Chicago-Street-Names/)
  - [Chicago Streets Info](http://www.chsmedia.org/househistory/nameChanges/start.pdf)
  - [Wikipedia list of Chicago Placename etymologies](https://en.wikipedia.org/wiki/List_of_Chicago_placename_etymologies)
  - [Honorary Chicago](http://www.honorarychicago.com/frequently-asked-questions-faq) : a site listing honorary chicago street names

  ## Thanks and Attributions
   - street sign in header by Amos Meron from [the Noun Project](https://thenounproject.com/term/street-sign/28140/)
   - Thanks to the Nerdery for making a fun hackathon on the Day of Civic Hacking!

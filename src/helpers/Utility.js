
export const filterMoviesBasedOnGenre  = (allMovies, cb) =>{
    let movies= {}
    let genres= {}
    allMovies?.map((item)=>{
      movies[item.id]=item;
      item.genres.map((genereItem)=>{
        if(!genres[genereItem])
        {
          genres[genereItem]= new Set()
        }
        genres[genereItem].add(item?.id)
      })

    })
    cb(movies, genres)
  }

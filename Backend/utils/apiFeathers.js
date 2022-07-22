class ApiFeathers {
    constructor(query, queryStr){
      this.query = query;
      this.queryStr = queryStr; 
    }


    search() {
      // if queryStr exist
     this.queryStr.keyword ? 
     {
       name: {
        $regex: this.queryStr.keyword,
        $option: "i",
       },
     } : {}

     console.log(keyword);

     this.query = this.query.find({...keyword});
     return this;
    }
}


module.exports = ApiFeathers;
class ExchangeModel {
  constructor(id, name, image, trust_score_rank, url) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.trust_score_rank = trust_score_rank;
    this.url = url;
    this.date = new Date();  
  }
}

export default ExchangeModel;
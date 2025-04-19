class PlayerService {
    constructor() {
        this.players = [
            {
                id: 1,
                name: "Tsubasa Ozora",
                position: "Midfielder",
                number: 10,
                image: "/assets/players/player1.jpg"
            },
            {
                id: 2,
                name: "Genzo Wakabayashi",
                position: "Goalkeeper",
                number: 1,
                image: "/assets/players/player2.jpg"
            },
            {
                id: 3,
                name: "Taro Misaki",
                position: "Midfielder",
                number: 11,
                image: "/assets/players/player3.jpg"
            }
        ];
    }

    getPlayers() {
        return this.players;
    }
}

export default PlayerService;
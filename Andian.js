//bot genrador de random
class AndianBotRand extends Agent {
    constructor(){ 
        super();
        this.board = new Board();
    }


    compute(board, time){
        // Always cheks the current board status since opponent move can change several squares in the board
        var moves = this.board.valid_moves(board);
        // Randomly picks one available move
        var index = Math.floor(moves.length * Math.random());
        return moves[index];
    }
}



class AndianBotTerminateSquare extends Agent {
    constructor(){ 
        super(); 
        this.board = new Board();
    }


    compute(board, time){
        var m = this.size
        var moves = this.board.valid_moves(board);



        var index = 0;
        var band = false; 

        
        for (var i = 0; i < moves.length; i++) {
            if(board[moves[i][0]][moves[i][1]] == 0) {
                if(this.minimum(board,moves[i][0],moves[i][1],moves[i][2])){return moves[i]}
                }          
            for (var j = 0; j < 4; j++) {
                if (board[moves[i][0]][moves[i][1]] == 2 ** j) {
                    if(this.minimum(board,moves[i][0],moves[i][1],moves[i][2])){return moves[i]}
                    }
                }
                      
            }
       
        if (!band){index = Math.floor(moves.length * Math.random());}
        return moves[index];
    }


    minimum(board,i,j,s){
        if(s == 0){
            if(i <= 0){return true}
            if(board[i-1][j] == 0) {
                return true;
            }
            for (var k = 0; k < 4; k++) {
                if (board[i-1][j] == 2 ** k) {
                    return true;
                }
            }
            return false;    
        }
        if(s == 1){
            if(j >= 19){return true}
            if(board[i][j+1] == 0) {
                return true;
            }
            for (var k = 0; k < 4; k++) {
                if (board[i][j+1] == 2 ** k) {
                    return true;
                }
            }
            return false;  
        }
        if(s == 2){
            if(i >= 19){return true}
            if(board[i+1][j] == 0) {
                return true;
            }

            for (var k = 0; k < 4; k++) {
                if (board[i+1][j] == 2 ** k) {
                    return true;
                }
            }
            return false; 
        }
        if(s == 3){
            if(j <= 0){return true}
            if(board[i][j-1] == 0) {
                return true;
            }
            for (var k = 0; k < 4; k++) {
                if (board[i][j-1] == 2 ** k) {
                    return true;
                }
            }
            return false;  
        }              
    }
}



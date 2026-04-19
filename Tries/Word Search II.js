class TrieNode {
    constructor() {
        this.children = {};
        this.word = null; // store full word at end node
    }
}

var findWords = function(board, words) {
    const root = new TrieNode();
    
    // Build Trie
    for (let word of words) {
        let node = root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.word = word; // mark complete word
    }
    
    const result = [];
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (r, c, node) => {
        let ch = board[r][c];
        
        if (!node.children[ch]) return;
        
        node = node.children[ch];
        
        // Found a word
        if (node.word !== null) {
            result.push(node.word);
            node.word = null; // avoid duplicates
        }
        
        // mark visited
        board[r][c] = '#';
        
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        
        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;
            
            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                board[nr][nc] !== '#'
            ) {
                dfs(nr, nc, node);
            }
        }
        
        // restore
        board[r][c] = ch;
        
        // 🔥 Optimization: prune Trie
        if (Object.keys(node.children).length === 0) {
            delete node.children[ch];
        }
    };
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }
    
    return result;
};
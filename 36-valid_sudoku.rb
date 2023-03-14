def is_valid_sudoku(board)
    # Check rows
    board.each do |row|
        return false if has_duplicates(row)
    end
    
    # Check columns
    9.times do |i|
        column = []
        9.times do |j|
            column << board[j][i]
        end
        return false if has_duplicates(column)
    end
    
    # Check sub-boxes
    3.times do |i|
        3.times do |j|
            sub_box = []
            3.times do |k|
                3.times do |l|
                    sub_box << board[3*i+k][3*j+l]
                end
            end
            return false if has_duplicates(sub_box)
        end
    end
    
    # If all checks pass, the board is valid
    return true
end

def has_duplicates(arr)
    # Use a hash table to keep track of digits seen so far
    seen = {}
    arr.each do |digit|
        if digit != '.'
            return true if seen[digit]
            seen[digit] = true
        end
    end
    return false
end

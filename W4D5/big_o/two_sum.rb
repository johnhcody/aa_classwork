def two_sum?(arr, target_sum)
    (0...arr.length-1).each do |i|
        (i + 1...arr.length).each do |j|
            return true if arr[i] + arr[j] == target_sum
        end
    end
    false
end



def sorted_two_sum?(arr, target_sum)
    sorted = arr.sort
    sorted.each.with_index do |ele, i|
        return true if ele + sorted[i + 1] == target_sum
    end
    false
end

def hash_sum?(arr, target_sum)

    hash = Hash.new(0)

    arr.each do |ele|
        hash[ele] += 1
    end

    hash.any? do |k,v|
        if v == target_sum - k
            if k == target_sum - k
                v > 1
            else
                true
            end
        end
    end
    
    #{|k,v| hash.has_key?(target_sum - k) }

end

arr = [0, 1, 5, 7]
p hash_sum?(arr, 6)
p hash_sum?(arr, 10)
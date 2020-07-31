require 'byebug'
def my_min(arr)

    min_ele = arr[0]

    (0...arr.length - 1).each do |i|
        (i+1...arr.length).each do |j|
            if arr[i] < arr[j] && arr[i] < min_ele
                min_ele = arr[i]
            end
        end
    end
    min_ele

end

# time complexity is n^2 

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
#p my_min(list)


def my_min_phase_two(arr)

    min_ele = arr.first

    arr.each {|ele| min_ele = ele if ele < min_ele }

    min_ele
end

# time complexity is n

#p my_min_phase_two(list)


def largest_contiguous_subsum(list)

    max_sum = 0

    (0...list.length - 1).each do |i|
        (i...list.length).each do |j|
            sub = list[i..j]
            if sub.sum > max_sum
                max_sum = sub.sum
            end
        end
    end
    
    max_sum

end

# time complexity is n^2

list = [5, 3, -7]
#p largest_contiguous_subsum(list) # => 8

# def phase_two(list)

#     current_sum = list.first
#     running_sum = list.first
#     max_sum = list.first
#     i = 0

#     while i < list.length - 1     
#         current_sum = 

#         #running_sum = current_sum + list[i + 1] # running = 8
#         if running_sum > max_sum
#             max_sum = running_sum  # max_sum = 8
#         end
#         i += 1
#     end
#     max_sum
# end


def phase_two(list)

    max_sum = list.first
    current_total = 0

    list.each_with_index do |ele, idx|
        current_total += ele
        if current_total > max_sum 
            max_sum = current_total
        elsif current_total < 0
            current_total = 0
        end

    end
     max_sum
end

list = [5, 3, -7]
p phase_two(list)

list = [2, 3, -6, 7, -6, 7]
p phase_two(list)

list = [-5, -1, -3]
p phase_two(list) # => -1 


"""

arr.length = 3

arr[0]
arr[1]
arr[2]

arr[0]

arr[1]
arr[2]
arr[0] + arr[1]
arr[1] + arr[2]
arr[2] + arr[3]

"""
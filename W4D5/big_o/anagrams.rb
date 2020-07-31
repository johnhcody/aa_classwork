def first_anagram?(str1, str2)
    anagram_arr = []
    len = str1.length
    fac = factorial(len)

    until anagram_arr.length == fac
        char_arr = str1.chars.shuffle
        anagram_arr << char_arr.join if !anagram_arr.include?(char_arr.join)
    end
    p anagram_arr
    anagram_arr.include?(str2)
end

def factorial(n)
    return 1 if n == 0
    n * factorial(n - 1)
end

#p first_anagram?("dog", "god")
#p first_anagram?("bird", "fish")
#p first_anagram?("elvis", "lives")

def second_anagram?(str1, str2)
    str2_char_arr = str2.chars
    str1.each_char do |char|
        idx = str2_char_arr.find_index(char)
        if idx
            str2_char_arr.delete_at(idx)
        end    
    end
    str2_char_arr.empty?

end

#p second_anagram?("dog", "god")
#p second_anagram?("bird", "fish")
#p second_anagram?("elvis", "lives")


def third_anagram?(str1, str2)

    str1.chars.sort == str2.chars.sort

end

def fourth_anagram?(str1, str2)

    hash = Hash.new(0)

    str1.each_char do |ele|
        hash[ele] += 1
    end
    #puts hash

    str2.each_char do |ele|
        hash[ele] -= 1
    end
    #puts hash
    hash.values.all? {|ele| ele == 0 }

end

p fourth_anagram?("dog", "god")
p fourth_anagram?("bird", "fish")
p fourth_anagram?("elvis", "lives")
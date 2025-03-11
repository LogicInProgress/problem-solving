def lcp(s)
  # common_string = ""
  # for i in 1..n do
  #   comparing_string = common_string.length.zero? ? s[0] : common_string

  #   j = 0
  #   common_string = ""
  #   while (true) do
  #     break if s[i][j] != comparing_string[j]

  #     common_string += comparing_string[j]
  #     j += 1
  #   end

  #   return common_string if common_string.length.zero?
  # end

  # return common_string

  # Approach
  # When a list of strings is sorted lexicographically,
  # the first string and the last string in this sorted list will have the longest common prefix
  # This is because, in a sorted list,
  # the closest strings in terms of lexicographical order are adjacent,
  # making their common prefix the longest possible for the entire list

  # Edge case: empty array
  return "" if strs.empty?

  # Sort the array to get the lexicographically smallest and largest strings
  strs.sort!
  
  # First string (smallest in sorted order)
  first = strs.first
  # Last string (largest in sorted order)
  last = strs.last

  common_prefix = ""

  # Compare characters of the first and last strings
  (0...[first.length, last.length].min).each do |i|
    # If characters don't match, return the current prefix
    break if first[i] != last[i]

    # Append the matching character to the result
    common_prefix += first[i]
  end

  # Return the longest common prefix found
  common_prefix
end

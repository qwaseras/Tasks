5.times do |i|
  Task.create( description: "A task №#{i}.", overtaskid: 0, isdone: false)
end
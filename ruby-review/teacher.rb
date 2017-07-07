class Teacher


  def self.all
  end
  def courses

    Session.all.select do |session|
      session.teacher == self
    end.map do |matching_session|
        matching_session.course
    end.uniq


    # [<@course, @teacher>]
  # give me all the sessions
  # then go through the sessions finding the ones have a teacher id that i want
  end
end


bob = Teacher.new('bob')
bob.courses

(function (GBL) {
  console.log('ExerciseRepo v0.0.2');

  var ExerciseRepo;

  ExerciseRepo = function (exercises) {
    this._ = {
      exercises: exercises,
      indexes: {}
    };
  };

  ExerciseRepo.prototype.findByMainMuscleGroup = function (muscleGroupCode) {
    var index;

    this._assertIndexedByMainMuscleGroupCode();

    index = this._.indexes.mainMuscleGroupCode;

    exercises = index[muscleGroupCode] || [];

    return exercises;
  };

  ExerciseRepo.prototype._assertIndexedByMainMuscleGroupCode = function () {
    if (!this._.indexes.mainMuscleGroupCode) {
      this._indexByMainMuscleGroupCode();
    }
  };

  ExerciseRepo.prototype._indexByMainMuscleGroupCode = function () {
    var exercise, exercises, i, iLen, index, mainMuscleGroupCode;

    index = this._.indexes.mainMuscleGroupCode = {};

    exercises = this._.exercises;
    for (i = 0, iLen = exercises.length; i < iLen; ++i) {
      exercise = exercises[i];
      mainMuscleGroupCode = exercise.main_mscl_grp_code;

      if (!index[mainMuscleGroupCode]) {
        index[mainMuscleGroupCode] = [];
      }
      index[mainMuscleGroupCode].push(exercise);
    }
  };

  GBL.ExerciseRepo = ExerciseRepo;
})(this);

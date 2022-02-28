/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  golferName: string,
  Ave?: number | null,
  Ave10Course?: number | null,
};

export type ModelUserConditionInput = {
  golferName?: ModelStringInput | null,
  Ave?: ModelIntInput | null,
  Ave10Course?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  golferName: string,
  Ave?: number | null,
  Ave10Course?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  golferName?: string | null,
  Ave?: number | null,
  Ave10Course?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateScoreInput = {
  id?: string | null,
  userId: string,
  score: string,
  courseId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelScoreConditionInput = {
  userId?: ModelIDInput | null,
  score?: ModelStringInput | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScoreConditionInput | null > | null,
  or?: Array< ModelScoreConditionInput | null > | null,
  not?: ModelScoreConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Score = {
  __typename: "Score",
  id: string,
  userId: string,
  score: string,
  courseId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateScoreInput = {
  id: string,
  userId?: string | null,
  score?: string | null,
  courseId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteScoreInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  userId: string,
  courseName: string,
  parNumber: string,
};

export type ModelCourseConditionInput = {
  userId?: ModelIDInput | null,
  courseName?: ModelStringInput | null,
  parNumber?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  userId: string,
  courseName: string,
  parNumber: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCourseInput = {
  id: string,
  userId?: string | null,
  courseName?: string | null,
  parNumber?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateFollowInput = {
  id?: string | null,
  followId: string,
  followewId: string,
};

export type ModelFollowConditionInput = {
  followId?: ModelIDInput | null,
  followewId?: ModelIDInput | null,
  and?: Array< ModelFollowConditionInput | null > | null,
  or?: Array< ModelFollowConditionInput | null > | null,
  not?: ModelFollowConditionInput | null,
};

export type Follow = {
  __typename: "Follow",
  id: string,
  followId: string,
  followewId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFollowInput = {
  id: string,
  followId?: string | null,
  followewId?: string | null,
};

export type DeleteFollowInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  golferName?: ModelStringInput | null,
  Ave?: ModelIntInput | null,
  Ave10Course?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelScoreFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  score?: ModelStringInput | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScoreFilterInput | null > | null,
  or?: Array< ModelScoreFilterInput | null > | null,
  not?: ModelScoreFilterInput | null,
};

export type ModelScoreConnection = {
  __typename: "ModelScoreConnection",
  items:  Array<Score | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  courseName?: ModelStringInput | null,
  parNumber?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelFollowFilterInput = {
  id?: ModelIDInput | null,
  followId?: ModelIDInput | null,
  followewId?: ModelIDInput | null,
  and?: Array< ModelFollowFilterInput | null > | null,
  or?: Array< ModelFollowFilterInput | null > | null,
  not?: ModelFollowFilterInput | null,
};

export type ModelFollowConnection = {
  __typename: "ModelFollowConnection",
  items:  Array<Follow | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateScoreMutationVariables = {
  input: CreateScoreInput,
  condition?: ModelScoreConditionInput | null,
};

export type CreateScoreMutation = {
  createScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateScoreMutationVariables = {
  input: UpdateScoreInput,
  condition?: ModelScoreConditionInput | null,
};

export type UpdateScoreMutation = {
  updateScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteScoreMutationVariables = {
  input: DeleteScoreInput,
  condition?: ModelScoreConditionInput | null,
};

export type DeleteScoreMutation = {
  deleteScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowMutationVariables = {
  input: CreateFollowInput,
  condition?: ModelFollowConditionInput | null,
};

export type CreateFollowMutation = {
  createFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowMutationVariables = {
  input: UpdateFollowInput,
  condition?: ModelFollowConditionInput | null,
};

export type UpdateFollowMutation = {
  updateFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowMutationVariables = {
  input: DeleteFollowInput,
  condition?: ModelFollowConditionInput | null,
};

export type DeleteFollowMutation = {
  deleteFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      golferName: string,
      Ave?: number | null,
      Ave10Course?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScoreQueryVariables = {
  id: string,
};

export type GetScoreQuery = {
  getScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListScoresQueryVariables = {
  filter?: ModelScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScoresQuery = {
  listScores?:  {
    __typename: "ModelScoreConnection",
    items:  Array< {
      __typename: "Score",
      id: string,
      userId: string,
      score: string,
      courseId: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      userId: string,
      courseName: string,
      parNumber: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowQueryVariables = {
  id: string,
};

export type GetFollowQuery = {
  getFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowsQueryVariables = {
  filter?: ModelFollowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowsQuery = {
  listFollows?:  {
    __typename: "ModelFollowConnection",
    items:  Array< {
      __typename: "Follow",
      id: string,
      followId: string,
      followewId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScoreByUserQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScoreByUserQuery = {
  scoreByUser?:  {
    __typename: "ModelScoreConnection",
    items:  Array< {
      __typename: "Score",
      id: string,
      userId: string,
      score: string,
      courseId: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CourseByUserQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CourseByUserQuery = {
  courseByUser?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      userId: string,
      courseName: string,
      parNumber: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    golferName: string,
    Ave?: number | null,
    Ave10Course?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateScoreSubscription = {
  onCreateScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateScoreSubscription = {
  onUpdateScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteScoreSubscription = {
  onDeleteScore?:  {
    __typename: "Score",
    id: string,
    userId: string,
    score: string,
    courseId: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    userId: string,
    courseName: string,
    parNumber: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowSubscription = {
  onCreateFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowSubscription = {
  onUpdateFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowSubscription = {
  onDeleteFollow?:  {
    __typename: "Follow",
    id: string,
    followId: string,
    followewId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

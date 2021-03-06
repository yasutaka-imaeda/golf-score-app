/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      golferName
      Ave
      Ave10Course
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        golferName
        Ave
        Ave10Course
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getScore = /* GraphQL */ `
  query GetScore($id: ID!) {
    getScore(id: $id) {
      id
      userId
      score
      sumScore
      sumOut
      sumIn
      sumPat
      scoreDate
      createdAt
      updatedAt
      courseScoreId
    }
  }
`;
export const listScores = /* GraphQL */ `
  query ListScores(
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        score
        sumScore
        sumOut
        sumIn
        sumPat
        scoreDate
        createdAt
        updatedAt
        courseScoreId
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      userId
      courseName
      parNumber
      score {
        items {
          id
          userId
          score
          sumScore
          sumOut
          sumIn
          sumPat
          scoreDate
          createdAt
          updatedAt
          courseScoreId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        courseName
        parNumber
        score {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      followId
      followewId
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followId
        followewId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const scoreByUser = /* GraphQL */ `
  query ScoreByUser(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    scoreByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        score
        sumScore
        sumOut
        sumIn
        sumPat
        scoreDate
        createdAt
        updatedAt
        courseScoreId
      }
      nextToken
    }
  }
`;
export const scoreByUserByScoreDate = /* GraphQL */ `
  query ScoreByUserByScoreDate(
    $userId: ID!
    $scoreDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    scoreByUserByScoreDate(
      userId: $userId
      scoreDate: $scoreDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        score
        sumScore
        sumOut
        sumIn
        sumPat
        scoreDate
        createdAt
        updatedAt
        courseScoreId
      }
      nextToken
    }
  }
`;
export const courseByUser = /* GraphQL */ `
  query CourseByUser(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseByUser(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        courseName
        parNumber
        score {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

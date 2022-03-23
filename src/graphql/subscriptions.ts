/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      golferName
      Ave
      Ave10Course
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      golferName
      Ave
      Ave10Course
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      golferName
      Ave
      Ave10Course
      createdAt
      updatedAt
    }
  }
`;
export const onCreateScore = /* GraphQL */ `
  subscription OnCreateScore {
    onCreateScore {
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
export const onUpdateScore = /* GraphQL */ `
  subscription OnUpdateScore {
    onUpdateScore {
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
export const onDeleteScore = /* GraphQL */ `
  subscription OnDeleteScore {
    onDeleteScore {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
      id
      followId
      followewId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
      id
      followId
      followewId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
      id
      followId
      followewId
      createdAt
      updatedAt
    }
  }
`;

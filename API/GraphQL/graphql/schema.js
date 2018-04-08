import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType
} from 'graphql';
import mongoose from 'mongoose';

const Info = mongoose.model('Info');

const objType = new GraphQLObjectType({
  name: 'meta',
  filelds: {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
});

let InfoType = new GraphQLObjectType({
  name: 'Info',
  filelds: {
    _id: {
      type: GraphQLID
    },
    heigth: {
      type: GraphQLString
    },
    weight: {
      type: GraphQLString
    },
    hobby: {
      type: new GraphQLList(GraphQLString)
    },
    meta: {
      type: objType
    }
  }
});

const infos = {
  type: new GraphQLList(InfoType),
  args: {},
  resolve(root, params, options) {
    return Info.find({}).exec()
  }
}
const info = {
  type: InfoType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    return Info.findOne({_id: params.id}).exec();
  }
}

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info
    }
  })
})
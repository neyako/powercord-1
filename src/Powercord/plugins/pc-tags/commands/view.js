module.exports = {
  command: 'view',
  description: 'View a tag',
  func: (args, settings) => {
    if (!settings.get(args[0])) {
      return {
        send: false,
        result: {
          type: 'rich',
          title: `Tag "${args[0]}" does not exist`
        }
      };
    }

    return {
      send: false,
      result: {
        type: 'rich',
        title: args[0],
        description: settings.get(args[0])
      }
    };
  },
  autocomplete: (args, settings) => {
    if (args[1] !== void 0) {
      return false;
    }

    return {
      header: 'tags available to view',
      commands: settings
        .getKeys()
        .filter(tag => tag.toLowerCase().includes(args[0].toLowerCase()))
        .map(tag => ({
          command: tag,
          description: settings.get(tag)
        }))
    };
  }
};